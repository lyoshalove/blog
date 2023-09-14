import { AppDispatch } from 'app/providers/StoreProvider/config';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
