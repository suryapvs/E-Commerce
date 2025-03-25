import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Content from './components/content'
import Header from './components/header'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header title="E-Commerce"></Header>
    <Content body="Information"></Content>
    <Footer footer="End"></Footer>
  </StrictMode>,
)
