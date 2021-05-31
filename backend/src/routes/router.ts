import { Router } from 'express';
import DoctorsController from '../controllers/DoctorsController';

const routes = Router();

routes.get('/doctors', DoctorsController.index);
routes.get('/doctors/:id', DoctorsController.show);

routes.post('/insert', DoctorsController.create);

export default routes;
