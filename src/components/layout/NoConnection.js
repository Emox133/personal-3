import React, {useEffect, useState} from 'react';
import Allert from '../../utils/Allert'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography'


export default function NoConnection() {
  const [offline, setOffline] = useState(undefined)

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOffline(true)
    });

    window.addEventListener('online', () => {
      setOffline(false)
      setTimeout(() => {
        setOffline(undefined)
      }, [5000])
    })
  }, [])

  let content = offline ? (
    <>
      <Allert severity="danger .disabled">
          <ErrorIcon style={{margin: '0 .3rem 0 .6rem'}}/>
          <Typography variant="body1">
              Molimo vas provjerite vašu internet konekciju.
          </Typography>
      </Allert>
    </> 
  ) : offline === false ? (
    <>
      <Allert severity="success">
          <CheckCircleIcon style={{margin: '0 .3rem 0 .6rem'}}/>
          <Typography variant="body1">
              Vaša internet konekcija je stabilna.
          </Typography>
      </Allert>
    </> 
  ) : null

  return content
}
