import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import './index.css'

function App() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-background text-foreground p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>React + Tailwind v4 + shadcn/ui</CardTitle>
          <CardDescription>Production-ready boilerplate</CardDescription>
        </CardHeader>
        <CardContent className="space-x-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
