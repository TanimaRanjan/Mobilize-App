
const PATH_BASE = "https://api.mobilize.us/v1/events"
const PARAM_PAGE = "page=";
const PARAM_TIMESLOT='&timeslot_start=gte_now'
const PARAM_VIRTUAL='&is_virtual=true'


export const fetchMoreEvents = (pageNo = 0, setEventData, history) => {

    fetch(`${PATH_BASE}?${PARAM_PAGE}${pageNo}${PARAM_TIMESLOT}`)
            .then(response => response.json())
            .then(data => {
                let hasMore = (data.next==null) 
                return setEventData(data.data, pageNo, hasMore, history)
            })
            .catch(error => error)
  };
  