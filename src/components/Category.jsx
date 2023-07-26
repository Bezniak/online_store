import React from 'react';

export class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All',
                },
                {
                    key: 'furniture',
                    name: 'Furniture',
                },
                {
                    key: 'light',
                    name: 'Light',
                },
                {
                    key: 'decor',
                    name: 'Decor',
                },
                {
                    key: 'plant',
                    name: 'Plant',
                },

            ]
        }
    }

    render() {
        return (
            <div className={'categories'}>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                        {el.name}
                    </div>
                ))}
            </div>
        );
    }
}