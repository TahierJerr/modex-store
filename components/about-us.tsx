import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, EuroIcon, Zap } from "lucide-react"
import Container from "./ui/container"
import { useRouter } from "next/navigation"

const AboutUsSection = () => {
    const router = useRouter()

    return (
        <section className="py-16 bg-background">
            <Container>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">About MODEX: Quality Custom Computers at Fair Prices</h2>
                    <div className="max-w-2xl mx-auto mb-12">
                        <p className="text-center text-muted-foreground mb-4">
                            I&apos;m Taher Jerjissi, the founder of MODEX. I created this company to offer high-quality, affordable custom-built PCs without the bloatware.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[{
                            icon: Cpu, title: "Quality First", description: "Top-tier components carefully selected for optimal performance."
                        }, {
                            icon: EuroIcon, title: "Fair Pricing", description: "Affordable prices with no hidden fees."
                        }, {
                            icon: Zap, title: "Bloatware-Free", description: "Systems that run at their best from day one."
                        }].map((item, index) => (
                            <Card key={index} className="transition-transform transform hover:scale-105">
                                <CardContent className="flex flex-col items-center text-center p-6">
                                    <item.icon className="w-12 h-12 mb-4 text-primary" aria-label={item.title} />
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white p-8 rounded-lg mb-12 mx-auto">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Why I Started MODEX</h3>
                        <p className="text-lg mb-6 leading-relaxed">
                            After experiencing the frustrations of overpriced pre-built systems with quality issues, I built MODEX to offer a better alternative.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Badge variant="secondary" className="text-sm py-1 px-3 text-gray-400 bg-slate-900 hover:bg-slate-900">Passion for Quality</Badge>
                            <Badge variant="secondary" className="text-sm py-1 px-3 text-gray-400 bg-slate-900 hover:bg-slate-900">Fair Pricing</Badge>
                            <Badge variant="secondary" className="text-sm py-1 px-3 text-gray-400 bg-slate-900 hover:bg-slate-900">Attention to Detail</Badge>
                        </div>
                    </div>

                    <div className="text-center">
                        <Button onClick={() => router.push("/gaming-pcs")} size="lg" className="bg-slate-800 hover:bg-slate-700 text-white">
                            Explore Our Computers
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutUsSection;
