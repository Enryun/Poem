import React, { Component } from 'react';
import items from './Data';

const PoemContext = React.createContext();

class PoemProvider extends Component {

    state = {
        poems: [],
        sortedPoems: [],
        featuredPoems: [],
        loading: true,
    }

    componentDidMount() {
        let poems = this.formatData(items);
        let featuredPoems = poems.filter(poem => poem.featured === true);
        this.setState({
            poems,
            featuredPoems,
            sortedPoems: poems,
            loading: false,
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let poem = {...item.fields, id};
            return poem;
        });

        return tempItems;
    }

    render() {
        return (
            <PoemContext.Provider value={{...this.state}} >
                {this.props.children}
            </PoemContext.Provider>
        )
    }
}

const PoemConsumer = PoemContext.Consumer;

export {PoemContext, PoemProvider, PoemConsumer};