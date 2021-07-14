import {createContext} from 'react'

const AppContext = createContext({
    urlShorten: null,
    setToUrlShorten: () => {}
})

export default AppContext