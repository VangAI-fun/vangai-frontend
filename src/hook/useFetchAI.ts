"use client"
import {useEffect} from "react";



// {
//     "agent": {
//     "id": "crypto_tarot",
//         "type": "text"
// },
//     "message": {
//     "parts": [
//         {
//             "content": "What bitcoin price will be tomorrow",
//             "role": "user"
//         }
//     ]
// }
// }
export async function useFetchAI() {

    const api: string = process.env["REACT_APP_X_API_TOKEN"] || "";
    const url = 'https://dev-api.promptcatalog.online/api/message';
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'X-Api-Token': api,
            'Content-Type': 'application/json',
            Accept: 'application/json, application/problem+json'
        },
        body: '{"agent":{"id":"crypto_tarot","type":"text"},"message":{"parts":["content":"Told me about my girlfriend?","role":"user"}]},"model":{"config":{"top_p":0.5},"model_name":"gpt-3.5-turbo","provider":"gpt","system_prompt":"You are a helpful assistant."}}'
    };

    useEffect(() => {
        try {
            const response = fetch(url, options);

            response.then(data => {console.log(data)});
        } catch (error) {
            console.error(error);
        }
     }, [])
}