import React from 'react';

type ServiceProps =  {
    name: string,
}

const Service: React.VFC<ServiceProps> = ({name}) => <div className="text-5xl underline text-secondly">hello {name}</div>;

export default Service;
