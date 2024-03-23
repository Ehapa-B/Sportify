import React from 'react';

const getCurrentHash = () => {
    return window.location.hash.replace('#', '').replace('#', '')
}
export const useNavigation = () => {
    const [newUrl, setState] = React.useState(getCurrentHash ())
    window.addEventListener('hashchange', function (e) {
       const path = getCurrentHash ()
       setState(path)
    });
    const changeUrl = (path) => {
        window.location.hash = '#/'+path
    }
    return [newUrl, changeUrl]
}
