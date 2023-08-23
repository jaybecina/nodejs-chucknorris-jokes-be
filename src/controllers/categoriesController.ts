import { Request, Response } from "express";
import axios from 'axios';

const API_BASE_URL = 'https://api.chucknorris.io/jokes';

export const getCategoryList = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        const categories = response.data;
    
        res.json(categories);
    } catch (error) {
    console.error('Error fetching Chuck Norris joke categories:', error);
    res.status(500).json({ error: 'An error occurred while fetching categories' });
    }
};

export const getJokesByDefault = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/random`);
        const categories = response.data;
    
        res.json(categories);
    } catch (error) {
        console.error('Error fetching Chuck Norris joke by default:', error);
        res.status(500).json({ error: 'An error occurred while fetching the joke' });
    }
};

export const getJokesByCategory = async (req: Request, res: Response) => {
    try {
      const { category_value } = req.body;


      let data = null;
      if (!category_value || category_value === "") {
        const response = await axios.get(`${API_BASE_URL}/random`);
        data = response.data;
      } else {
        const response = await axios.get(`${API_BASE_URL}/random?category=${category_value}`);
        data = response.data;
      }

      const joke = data;
      res.json(joke);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke by category:', error);
      res.status(500).json({ error: 'An error occurred while fetching the joke.' });
    }
};

export const getJokesByFreeText = async (req: Request, res: Response) => {
    try {
        const { freetext_value } = req.body;

        if (!freetext_value) {
            return res.status(400).json({ error: 'freetext_value is required' });
        }

        const response = await axios.get(`${API_BASE_URL}/search?query=${freetext_value}`);
        const jokes = response.data;
        res.json(jokes);
    } catch (error) {
        console.error('Error fetching Chuck Norris jokes by free text:', error);
        res.status(500).json({ error: 'An error occurred while fetching the jokes' });
    }
};
