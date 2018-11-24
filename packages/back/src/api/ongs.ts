import { Request, Response } from 'express';

interface IOngsRoute {
  getOngs: (req: Request, res: Response) => void;
  addNewOng: (req: Request, res: Response) => void;
}

const getOngs = (req: Request, res: Response) => {
  const ongs = [
    {
      description: 'Casa assistencialista para pessoas cegas',
      name: 'Lar das moças cegas',
    },
  ];
  res.status(200).json(ongs);
};

const addNewOng = (req: Request, res: Response) => {
  // Code to add a new org on a database
  res.status(201);
};

const api: IOngsRoute = {
  addNewOng,
  getOngs,
};

module.exports = api;
