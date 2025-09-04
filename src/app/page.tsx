import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Star, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/hero-bg.jpg')",
        }}
      >
        <div className="text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Rate & Review
            <span className="block text-4xl md:text-6xl text-yellow-400">
              Every Experience
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Discover, rate, and share your experiences with restaurants, rental
            properties, and more. Build a community of trusted reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Start Exploring
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-black"
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose RateView?
            </h2>
            <p className="text-xl text-muted-foreground">
              The most trusted platform for location reviews and ratings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
                <CardTitle>Authentic Reviews</CardTitle>
                <CardDescription>
                  Real reviews from verified users who have actually visited
                  these locations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-blue-500 mb-4" />
                <CardTitle>Community Driven</CardTitle>
                <CardDescription>
                  Connect with friends and discover places through trusted
                  recommendations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-green-500 mb-4" />
                <CardTitle>Easy to Use</CardTitle>
                <CardDescription>
                  Intuitive interface designed for both web and mobile
                  experiences
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-muted-foreground">
              Find and review the places that matter to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Restaurants</CardTitle>
                    <CardDescription className="text-base">
                      Rate dining experiences, share photos, and help others
                      discover great food
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Properties</CardTitle>
                    <CardDescription className="text-base">
                      Review rental properties, share insights, and help others
                      make informed decisions
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 RateView. Built for better experiences.</p>
        </div>
      </footer>
    </div>
  );
}
