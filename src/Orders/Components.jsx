import React, {Component} from 'react';
import {GridRow, Header, Table, Input, Button} from 'semantic-ui-react';


export class ProductView extends Component {
 

    handleChange = (event) => {
        event.preventDefault();
        const value = this.target.value;
        if (value.length > 1) {
            this.props.handleSearch(value)
        }
    }

    render() {
        const {products} = this.props;

        return (
            <div>
            <GridRow>
                <Header>Προϊόντα</Header>
                <Input
                icon='search'
                iconPosition='left'
                placeholder='Search...'
                onChange={this.handleChange}
                fluid
                />
            </GridRow>
            <br />
            <GridRow>
                <Table inverted>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Προϊόν</Table.HeaderCell>
                            <Table.HeaderCell>Κατηγορία</Table.HeaderCell>
                            <Table.HeaderCell>Τιμή</Table.HeaderCell>
                            <Table.HeaderCell>Επιλογές</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {products !== null ?
                            
                            <Table.Row>
                                <Table.Cell>data</Table.Cell>
                            </Table.Row>
                            :
                            <Table.Row>
                                <Table.Cell>No data</Table.Cell>
                            </Table.Row>
                        }

                    </Table.Body>
                </Table>
            </GridRow>
            </div>
        )
    }
}


class OrderItemsView extends Component {

    render() {
        const {orderr_items} = this.props;
        return (
            <div>
                <GridRow>
                    <Header as='h4'>Προϊόντα</Header>
                    <Table>
                        <Table.Header>
                            <Table.HeaderCell>Τίτλος</Table.HeaderCell>
                            <Table.HeaderCell>Ποσότητα</Table.HeaderCell>
                            <Table.HeaderCell>Τιμή</Table.HeaderCell>
                            <Table.HeaderCell>Συνολική Αξία</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                        </Table.Header>
                    </Table>
                </GridRow>

            </div>
        )
    }
}

class OrderItemTable extends Component {

    render() {
        const {item} = this.props;
        return (
            <Table.Row>
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.qty}</Table.Cell>
                <Table.Cell>{item.tag_value}</Table.Cell>
                <Table.Cell>{item.tag_total_value}</Table.Cell>
                <Table.Cell>
                    <Button warning>Down</Button>
                    <Button success>Up</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}