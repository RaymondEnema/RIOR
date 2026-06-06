import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/folios', (req: Request, res: Response) => {
  res.json({ message: 'Guest folios', folios: [] });
});

router.post('/payment', (req: Request, res: Response) => {
  try {
    const { folioId, amount, method } = req.body;
    res.status(201).json({
      message: 'Payment processed',
      payment: { id: 1, folioId, amount, method, status: 'completed' }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to process payment' });
  }
});

export default router;
