import { Request, Response } from "express";
import axios from 'axios';

export const getCategoryList = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        const categories = response.data;
    
        res.json(categories);
    } catch (error) {
    console.error('Error fetching Chuck Norris joke categories:', error);
    res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
};

export const getJokesByDefault = async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        const categories = response.data;
    
        res.json(categories);
    } catch (error) {
        console.error('Error fetching Chuck Norris joke by default:', error);
        res.status(500).json({ error: 'An error occurred while fetching the joke' });
    }
};

export const getJokesByCategory = async (req: Request, res: Response) => {
    const categoryValue = req.params.categoryValue;
  
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${categoryValue}`);
      const joke = response.data.value;
      res.json({ joke });
    } catch (error) {
      console.error('Error fetching Chuck Norris joke by category:', error);
      res.status(500).json({ error: 'An error occurred while fetching the joke.' });
    }
};
