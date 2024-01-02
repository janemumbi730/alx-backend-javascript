export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const myPromise = {
        status: 200,
        body: 'Success',
      };
      resolve(myPromise);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
