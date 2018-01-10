import React from 'react';
import { List } from 'semantic-ui-react';

const GearList = ({ gears }) => (
  <List divided relaxed>
    { gears.map( gear => 
      <List.Item key={gear.id}>
        <List.Content>
          <List.Header>{gear.name}</List.Header>
          <List.Content>{gear.category}</List.Content>
          <List.Description>
            {gear.description}
          </List.Description>
        </List.Content>
      </List.Item>
      )
    }
  </List>
)

export default GearList;