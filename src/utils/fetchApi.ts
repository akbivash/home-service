
export const baseUrl = 'https://bayut.p.rapidapi.com'
const headers = new Headers();
headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_RAPID_API_KEY || '');
headers.set('X-RapidAPI-Host', 'bayut.p.rapidapi.com');

const options = {
	method: 'GET',
	headers: headers,
};

export const fetchApi = async (url: string) => {
    try {
      const response = await fetch(url, options);
    
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }

      return response.json();
    } catch (err) {
      throw new Error(`API call failed: ${err}`);
    }
  };
  