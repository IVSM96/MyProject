import { Button } from '@mui/material'
import { useRouter } from 'next/router'

export const Menu = () => {
    const router = useRouter()
    return (
        <div>
        <Button onClick={() => router.push('/movies')}>фильмы</Button>
        <Button onClick={() => router.push('/series')}>сериалы</Button>
        <Button onClick={() => router.push('/cartoons')}>мультфильмы</Button>
        </div>
    )
}