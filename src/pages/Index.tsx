import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const topPlayers = [
  { id: 1, name: "Prbitng", rating: 24130, skill: 87489, rank: 1, avatar: "/img/fa13ed7d-8a0c-43be-8032-e6660411b0a3.jpg" },
  { id: 2, name: "CyberStrike", rating: 23890, skill: 86234, rank: 2, avatar: "/img/fa13ed7d-8a0c-43be-8032-e6660411b0a3.jpg" },
  { id: 3, name: "NeonKnight", rating: 23456, skill: 85678, rank: 3, avatar: "/img/fa13ed7d-8a0c-43be-8032-e6660411b0a3.jpg" },
  { id: 4, name: "QuantumPro", rating: 22987, skill: 84321, rank: 4, avatar: "/img/fa13ed7d-8a0c-43be-8032-e6660411b0a3.jpg" },
];

const tutorials = [
  { id: 1, title: "Основы управления", duration: "12 мин", level: "Начинающий", image: "/img/253e9215-549a-47ba-80b5-1df0ce658902.jpg" },
  { id: 2, title: "Продвинутые финты", duration: "18 мин", level: "Средний", image: "/img/253e9215-549a-47ba-80b5-1df0ce658902.jpg" },
  { id: 3, title: "Тактика киберспорта", duration: "25 мин", level: "Продвинутый", image: "/img/253e9215-549a-47ba-80b5-1df0ce658902.jpg" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold gradient-text">FC 26 ESPORTS</h1>
          <div className="flex gap-6 items-center">
            <a href="#players" className="text-sm font-medium hover:text-primary transition-colors">Игроки</a>
            <a href="#ratings" className="text-sm font-medium hover:text-primary transition-colors">Рейтинги</a>
            <a href="#training" className="text-sm font-medium hover:text-primary transition-colors">Обучение</a>
            <Button className="neon-border bg-primary/20 hover:bg-primary/30">
              <Icon name="Trophy" size={16} className="mr-2" />
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <Badge className="neon-border bg-primary/20 text-primary border-primary">Сезон 2025</Badge>
              <h2 className="text-5xl lg:text-7xl font-bold neon-text">
                НОВАЯ ЭРА КИБЕРФУТБОЛА
              </h2>
              <p className="text-xl text-muted-foreground">
                Присоединяйся к элите FC 26. Соревнуйся с лучшими игроками, повышай рейтинг и становись чемпионом.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="neon-border bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow">
                  <Icon name="Gamepad2" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/20">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть турнир
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
              <img 
                src="/img/a4bcf254-ce9a-46c8-8145-213080fd099f.jpg" 
                alt="FC 26 Esports Arena" 
                className="relative rounded-lg neon-border w-full animate-slide-up"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="players" className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">ТОП ИГРОКИ</h3>
            <p className="text-muted-foreground">Элита киберспортивной арены FC 26</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPlayers.map((player) => (
              <Card key={player.id} className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={player.avatar} alt={player.name} className="w-16 h-16 rounded-full border-2 border-primary" />
                      <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">#{player.rank}</Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{player.name}</CardTitle>
                      <CardDescription>Рейтинг: {player.rating}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Навык</span>
                      <span className="font-bold text-primary">{player.skill}</span>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className={i < 4 ? "text-accent fill-accent" : "text-muted"} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ratings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">РЕЙТИНГОВАЯ СИСТЕМА</h3>
            <p className="text-muted-foreground">Следи за своим прогрессом и поднимайся по лиге</p>
          </div>
          <Tabs defaultValue="overall" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="overall" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Icon name="Trophy" size={16} className="mr-2" />
                Общий
              </TabsTrigger>
              <TabsTrigger value="weekly" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Icon name="Calendar" size={16} className="mr-2" />
                Недельный
              </TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Месячный
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overall" className="mt-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" className="text-primary" />
                    Общий рейтинг сезона
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topPlayers.slice(0, 3).map((player, index) => (
                      <div key={player.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border hover:border-primary transition-colors">
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-primary">#{index + 1}</span>
                          <img src={player.avatar} alt={player.name} className="w-12 h-12 rounded-full" />
                          <div>
                            <p className="font-semibold">{player.name}</p>
                            <p className="text-sm text-muted-foreground">Навык: {player.skill}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{player.rating}</p>
                          <p className="text-sm text-muted-foreground">очков</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="weekly" className="mt-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">Недельный рейтинг обновляется каждый понедельник</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monthly" className="mt-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <p className="text-center text-muted-foreground">Месячные турниры с призовым фондом</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="training" className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 gradient-text">ОБУЧЕНИЕ</h3>
            <p className="text-muted-foreground">Стань профессионалом с нашими уроками</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="bg-card border-border overflow-hidden hover:border-primary transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img src={tutorial.image} alt={tutorial.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{tutorial.level}</Badge>
                  <Button size="icon" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80 hover:bg-primary backdrop-blur-sm">
                    <Icon name="Play" size={24} />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tutorial.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Clock" size={14} />
                    {tutorial.duration}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/20">
              <Icon name="GraduationCap" size={20} className="mr-2" />
              Все уроки
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold gradient-text mb-4">FC 26 ESPORTS</h4>
              <p className="text-muted-foreground">Киберспортивная платформа нового поколения</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#players" className="hover:text-primary transition-colors">Игроки</a></li>
                <li><a href="#ratings" className="hover:text-primary transition-colors">Рейтинги</a></li>
                <li><a href="#training" className="hover:text-primary transition-colors">Обучение</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Связь</h5>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="border-primary hover:bg-primary/20">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-secondary hover:bg-secondary/20">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="border-accent hover:bg-accent/20">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 FC 26 Esports. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
