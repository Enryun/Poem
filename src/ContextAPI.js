import React, { Component } from 'react';
// import items from './Data';
import Client from './Contentful';


const PoemContext = React.createContext();

class PoemProvider extends Component {

    state = {
        poems: [],
        sortedPoems: [],
        featuredPoems: [],
        loading: true,
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({content_type: "thiCa", order: "sys.createdAt"});
            let poems = this.formatData(response.items);
            let featuredPoems = poems.filter(poem => poem.featured === true);
            
            this.setState({
                poems,
                featuredPoems,
                sortedPoems: poems,
                loading: false,
            })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
       this.getData()
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let poem = {...item.fields, id};
            return poem;
        });

        return tempItems;
    }

    handleChange = event => {
        console.log(event.target.value);
        
        let filterPoems = this.state.poems.filter(poem => poem.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({sortedPoems: filterPoems});
    }

    render() {
        return (
            <PoemContext.Provider value={{
                state: this.state,
                handleChange: this.handleChange,
            }} >
                {this.props.children}
            </PoemContext.Provider>
        )
    }
}

const PoemConsumer = PoemContext.Consumer;

export {PoemContext, PoemProvider, PoemConsumer};