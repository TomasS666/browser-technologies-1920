const express = require('express');
const router = express.Router();
const path = require('path')


async function getUserPage(handle){
    // const instagramJson = await axios.get(`https://www.instagram.com/${handle}/?__a=1`);
    // const instagramJson = await (await fetch(`https://www.instagram.com/${handle}/?__a=1`)).json();
    const instagramJson = await fetch(`https://www.instagram.com/${handle}/?__a=1`);
    // const {
    //      graphql:{
    //          user:{
    //             edge_owner_to_timeline_media: {
    //                 edges
    //             }
    //          }
    //      }
    // } = await instagramJson.data;
    console.log('handle from server ', handle )
    // console.log(instagramJson.data)

    const data = await instagramJson.json()
    console.log('data', data)
    console.log(instagramJson.json())

    return data
    // return getShortCodes(instagramJson.graphql.user.edge_owner_to_timeline_media.edges)
}

router.get('/', async (req, res) => {

   const data = await getUserPage()
    
   res.send('wef')

    // res.sendFile(path.resolve(__dirname,'../../static/index.html'))
})


module.exports = router;