import React from 'react';

type ServiceProps =  {
    name: string,
}

const Service: React.VFC<ServiceProps> = ({name}) => <div>hello {name}</div>;

export default Service;
