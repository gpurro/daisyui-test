import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 5000,
  responseType: 'json'
});

export const getRandomNumberFromApi = async (): Promise<number> => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await res.text();

  // throw new Error('Auxilio!!');
  return +numberString;
};

export const getRandomNumberPromise = new Promise<number>((resolve, reject) => {
  fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  )
    .then((res) => {
      resolve(1);
    })
    .catch((err) => {
      reject(err.message);
    });
});

export const test = async () => {
  getRandomNumberPromise
    .then((number) => {
      console.log(number);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const espera = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

export async function resolveAfter2Seconds(x: number) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

export const getRandomNumberFromApi2 = async () => {
  const res = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  );
  const numberString = await res.text();

  // throw new Error('Auxilio!!');
  return +numberString;
};

export const sleep = (seconds: number = 1): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
