import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { TableBody, TableHead, TableView } from 'src/table';

const stories = storiesOf('TableView features', module);

interface Person {
    id: number;
    name: string;
    age: number;
}

function getTestItems(postfix: string): Person[] {
    const people: Person[] = [
        {
            id: 1,
            name: 'First Dude',
            age: 34
        },
        {
            id: 2,
            name: 'Second Dude',
            age: 31
        },
        {
            id: 3,
            name: 'Third Dude',
            age: 62
        },
        {
            id: 4,
            name: 'Fourth Dude',
            age: 62
        }
    ];
    return people.map(p => ({
        ...p,
        name: `${p.name} (${postfix})`
    }));
}

stories.add('variable sized rows', () => {
    const items = getTestItems('variable sized rows');
    return (
        <TableView
            rowCount={items.length}
            rowHeight={index => (index + 1) * 40}
        >
            <TableHead>
                {['Name', 'Age']}
            </TableHead>
            <TableBody>
                {index => ([
                    items[index].name,
                    items[index].age
                ])}
            </TableBody>
        </TableView>
    );
});

stories.add('line numbers', () => {
    const items = getTestItems('line numbers');
    return (
        <TableView
            rowCount={items.length}
            lineNumbers={true}
        >
            <TableHead>
                {['Name', 'Age']}
            </TableHead>
            <TableBody>
                {index => ([
                    items[index].name,
                    items[index].age
                ])}
            </TableBody>
        </TableView>
    );
});