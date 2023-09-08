import './css/HomeFeedPage.css'
import React from 'react'

import DesktopNavigation from '../components/DesktopNavigation'

import Cookies from 'js-cookie'

export default function HomeFeedPage() {
    // for storing activities
    const [activities, setActivities] = React.useState([]);
    // 
    const [popped, setPopped] = React.useState(false);
    //
    const [poppedReply, setPoppedReply] = React.useState(false);
    //
    const [replyActivity, setReplyActivity] = React.useState({});
    // for storing user object
    const [user, setUser] = React.useState(null);
    // 
    const dataFetchedRef = React.useRef(false);

    const loadData = async () => {
        try {
            const backend_url = `${process.env.REACT_APP_BACKEND_URL}/api/activities/home`
            const res = await fetch(backend_url, {
                method: "GET"
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setActivities(resJson)
              } else {
                console.log(res)
              }
        } catch (err) {
            console.error("Home activities: /api/activities/home could not be fetched due to ",err)
        }
    }

    const checkAuth = async () => {
        console.log('checkAuth')
        // [TODO] Authenication
        if (Cookies.get('user.logged_in')) {
          setUser({
            display_name: Cookies.get('user.name'),
            handle: Cookies.get('user.username')
          })
        }
    };

    React.useEffect(()=>{
        //prevents double call
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
    
        loadData();
        checkAuth();
    }, [])

    return (
        <article>
            <DesktopNavigation user={user} active={'home'} setPopped={setPopped} />
        </article>
    )
    
}