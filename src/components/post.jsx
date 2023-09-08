import {
     Avatar,
     Box,
     Card,
     CardActions,
     CardContent,
     CardHeader,
     CardMedia,
     Checkbox,
     IconButton,
     Typography,
   } from "@mui/material";
   
   import ShareIcon from '@mui/icons-material/Share';
   import { Favorite, FavoriteBorder } from "@mui/icons-material";
   import MoreVertIcon from '@mui/icons-material/MoreVert';
   import FavoriteIcon from '@mui/icons-material/Favorite';

function Post()
{
     return(
          <>
          <Card sx={{margin:3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height='400px'
        image="https://source.unsplash.com/random"
        alt="Paella dish"
        className="fluid"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
         
        
      </CardActions>
     
    </Card>
          </>
     )


}

export default Post;