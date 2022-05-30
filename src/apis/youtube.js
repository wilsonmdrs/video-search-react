import axios from 'axios'

const KEY = 'AIzaSyACKswtR7CjdnnV3p70ekNFDgalRD7obKQ'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
})