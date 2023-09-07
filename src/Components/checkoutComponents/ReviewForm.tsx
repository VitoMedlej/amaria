"use client"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { loadState } from '@/Utils/LocalstorageFn';
import totalCal from '@/Utils/totalCal';


// const products = [
//   {
//     name: 'Product 1',
//     desc: 'A nice thing',
//     price: '$9.99',
//   },
//   {
//     name: 'Product 2',
//     desc: 'Another thing',
//     price: '$3.45',
//   },
//   {
//     name: 'Product 3',
//     desc: 'Something else',
//     price: '$6.51',
//   },
//   {
//     name: 'Product 4',
//     desc: 'Best thing of all',
//     price: '$14.11',
//   },
//   { name: 'Shipping', desc: '', price: '3.99$' },
// ];



      // return 0
// }  
export default function Review({setActiveStep}:{setActiveStep:any}) {

  const products = loadState('sgh2j40-tlsit')
 
  const info = loadState('sgh2j40-b12fg')

  const total = totalCal(products);
  if (!info) {
    setActiveStep(0)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products?.length > 0 && products.map((product:any) => {

        
          if (!product?._id) return;
         return <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
             <ListItemText primary={`${product?.title || 'Product Name'} - ${product?.selectedColor ? product?.selectedColor : ''}`}  />
            <Typography variant="body2">${product?.price}</Typography>
          </ListItem>
        })}
        <Divider/>
        {/* <ListItem sx={{px: 0 }}>

<ListItemText primary="Delivery" />
<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
  $3
</Typography>
</ListItem> */}
        <ListItem sx={{ px: 0 }}>

          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${total} 
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          NOTE: 3$ all over lebanon, only 1 condition the total is under 20kg
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Order Summary 
          </Typography>
                <Typography gutterBottom>{info.firstName}</Typography>
                <Typography gutterBottom>{info.lastName}</Typography>
                {/* <Typography gutterBottom>{info.email}</Typography> */}
                <Typography gutterBottom>{info.phone}</Typography>
                <Typography gutterBottom>{info.address1}</Typography>
                <Typography gutterBottom>{info.address2}</Typography>
                <Typography gutterBottom>{info.city}</Typography>
        
        
        </Grid>
   
      </Grid>
    </React.Fragment>
  );
}