import {
     Avatar,
  
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
   
   import EditIcon from '@mui/icons-material/Edit';

function Post({title, date ,image,description})
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
            <EditIcon />
          </IconButton>
        }
        title= {title}
        subheader={date}
      />
      <CardMedia
        component="img"
        height='400px'
        image={image}
        alt={title}
        className="fluid"
       
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {description}
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