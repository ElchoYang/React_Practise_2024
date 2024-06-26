import { useState, useEffect } from 'react'
import useSystem from '../hooks/useSystem';

const LoginHeader = () => {
  const [systemName, setSystemName] = useState('')
  const { getSystem } = useSystem();

  useEffect(() => {
    getSystemName()
  }, [])

  const getSystemName = () => {
    if (systemName == '')
      getSystem().then((data) => { setSystemName(data.title) })
  }
  return (
    <>
      <h3>{systemName}</h3>
    </>
  );
};

export default LoginHeader;
