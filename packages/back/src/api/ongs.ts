import { Request, Response } from 'express';

interface IOngsRoute {
  getOngs: (req: Request, res: Response) => void;
}

const getOngs = (req: Request, res: Response) => {
  const ongs = [
    {
      name: 'Lar das moças cegas',
    },
  ];
  res.status(200).json(ongs);
};

const api: IOngsRoute = {
  getOngs,
};

module.exports = api;