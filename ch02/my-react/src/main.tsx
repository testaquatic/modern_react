import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById('root')!);


setInterval(() => {
  root.render(
    <p>
      현재시각: {new Date().toLocaleTimeString()}
    </p>
  );
}, 1000)
