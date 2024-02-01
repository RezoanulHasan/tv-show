import { useEffect } from "react"

const useTitle = title => {

    useEffect (() => {
document.title= `  ${title}-name`

    },[title])
};

export default  useTitle ;