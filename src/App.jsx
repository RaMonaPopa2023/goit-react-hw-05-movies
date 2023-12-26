import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Cast from './pages/Movies/Cast';
import Reviews from './pages/Movies/Reviews';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const MoviesPage = lazy(() => import('./pages/Movies/MoviesPage'));
const MoviesDetails = lazy(() => import('./pages/Movies/MoviesDetails'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="movies"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesPage />
              </Suspense>
            }
          />
          <Route
            path="movies/:id/*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MoviesDetails />
              </Suspense>
            }
          >
            <Route index element={<MoviesDetails />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
