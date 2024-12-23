"use client";
import { useState, useEffect } from 'react';

interface FetchRequest {
    content: string;
}

interface DataRequest {
    message_id: string;
}

const API_BASE_URL = 'http://localhost:8080';

export function useFetchAI(content: string) {

    const [data, setData] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect( () => {
        const fetchResult = async (request: FetchRequest): Promise<string> => {
            console.log("Fetching result...");
            const response = await fetch(`${API_BASE_URL}/api/wangaai/fetch`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
                mode: 'no-cors',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch result');
            }
            console.log(response)
            return response.text();
        };

        const fetchData = async (request: DataRequest): Promise<string> => {
            console.log("Fetching data...");
            const response = await fetch(`${API_BASE_URL}/api/wangaai/data`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
                mode: 'no-cors',
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.text();
        };

        const fetchSequence = async () => {
            console.log("Starting fetch sequence...");
            setLoading(true);
            setError("");

            try {
                console.log(content);
                const messageId = await fetchResult({ content });
                console.log('Message ID:', messageId);

                const fetchDataResponse = await fetchData({ message_id: messageId });
                console.log('Fetch Data Response:', fetchDataResponse);

                setData(fetchDataResponse);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (content.trim() !== "") {
            fetchSequence().then(r => r);
        } else {
            console.log("Content is empty, skipping fetch sequence.");
            setLoading(false);
        }
        return () => {};
    }, [content]);

    return { data, loading, error };
}
