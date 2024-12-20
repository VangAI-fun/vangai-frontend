"use client";
import { useEffect } from "react";

export async function useFetchAI() {
    const api: string = process.env.REACT_APP_X_API_TOKEN || "";
    const url = "https://dev-api.promptcatalog.online/api/message";

    const options: RequestInit = {
        method: "POST",
        mode: 'no-cors',
        headers: {
            "X-Api-Token": api,
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            agent: {
                id: "crypto_tarot",
                type: "text",
            },
            message: {
                parts: [
                    {
                        content: "What bitcoin price will be tomorrow",
                        role: "user",
                    },
                ],
            },
        }),
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    console.error(`Error: ${response.status} ${response.statusText}`);
                } else {
                    const data = await response.json();
                    console.log(data);
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);
}
