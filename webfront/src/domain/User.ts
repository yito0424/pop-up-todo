type User {
  userName: string;
  password: string;

//   constructor(userName: string, password: string) {
//     this.userName = userName;
//     this.password = password;
//   }

//   isLoggedIn = () => this.get('isLoggedIn') === 'true';
//   set = (key: string, value: string) => localStorage.setItem(key, value);
//   get = (key: string) => this.getLocalStorage(key);

//   getLocalStorage: (key: string) => string | null = (key) => {
//     const ret = localStorage.getItem(key);
//     const retTtoken = localStorage.getItem('token');
//     if (ret && retTtoken) {
//       return ret;
//     }

//     return null;
//   };

//   signUp = () => {
//     const url = process.env.REACT_APP_API_ENDPOINT;
//     console.log(url)

    //     let formDataSignup = new FormData(fetchFormSignup);
    //     fetch(url, {
    //         method: 'POST',
    //         body: formDataSignup
    //     }).then((response) => {
    //         if(!response.ok) {
    //             console.log('response error!');
    //             return false;
    //         } else {
    //           console.log('response good!');
    //           return response.json();
    //         }
    //     }).then((data)  => {
    //         const title = data.title
    //         if (title) {
    //           console.log('title = ' + title);
    //           window.location.href = '/login';
    //           return true;
    //         } else {
    //           console.log("error!");
    //           return false;
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //         return false;
    //     });
//   };
}

export default User
