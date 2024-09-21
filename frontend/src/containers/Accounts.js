import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { ConsoleLogger } from 'aws-amplify/utils';
import { View, Heading, Flex } from '@aws-amplify/ui-react';
import { getItems as GetItems } from '../graphql/queries.js';
import Plaid from '../components/Plaid';
import Institutions from '../components/Institutions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';


const logger = new ConsoleLogger("Protected");

export default function   Protected() {
  const [items, setItems] = useState([]);
  const client = generateClient();

  const getItems = async () => {
    try {
      const res = await client.graphql({
        query: GetItems
      });
      logger.info(res);
      setItems(res.data.getItems.items);
    } catch (err) {
      logger.error('unable to get items', err);
    }
  }

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  useEffect(() => {
    getItems();
  }, []);
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          Card example
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Flex direction="column">
      <Plaid getItems={getItems}/>
      {(items && items.length) ? (
        <View>
          <Heading>Institutions</Heading>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
          </Box>
          <Institutions institutions={items}/>
        </View>
      ) : (<div/>)
      }
    </Flex>
  );
}
