
const PATH_BASE = "https://api.mobilize.us/v1/events"
const PARAM_PAGE = "page=";


export const fetchMoreEvents = (pageNo = 0, setEventData, history) => {

    console.log('FETCH MORE DATA')
    fetch(`${PATH_BASE}?${PARAM_PAGE}${pageNo}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                return setEventData(data.data, pageNo, history)
            })
            .catch(error => error)
  };
  