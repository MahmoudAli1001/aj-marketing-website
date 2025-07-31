"use client"

import { Navbar } from "@/components/navbar"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">من نحن</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                تعرف على قصتنا ورؤيتنا في عالم التسويق الرقمي والإبداع
              </p>
            </div>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold">من نحن</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    نحن شباب سعوديين نعمل في مجال الدعاية والاعلان ونوفق جمعنا حب العمل والشغف والإبداع وأسس عالية
                    ومعايير للجودة والاحترافية لنقدم مثال يحتذى به نقدم مجموعة متنوعة من خدمات إدارة محتوى السوشال
                    ميديا.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <Users className="h-20 w-20 sm:h-24 sm:w-24 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
                  <Eye className="h-20 w-20 sm:h-24 sm:w-24 text-secondary" />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold">رؤيتنا</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    أن نكون المؤسسة الرائدة المتخصصة في مجال التصوير والمونتاج وإدارة المحتوى عن طريق تقديم حلول مبتكرة
                    ابداعية متفردة تحول أحلام عملائنا إلى واقع مبهر ملموس.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container px-4">
            <div className="text-center space-y-4 mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">قيمنا الأساسية</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                المبادئ والقيم التي نؤمن بها ونعمل من خلالها لتحقيق التميز
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>الجودة والإتقان</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">نلتزم بأعلى معايير الجودة والإتقان في جميع أعمالنا ومشاريعنا</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>العمل الجماعي</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">نؤمن بقوة الفريق والتعاون المثمر لتحقيق أفضل النتائج</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>التميز والإبداع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">نسعى دائماً للتميز والإبداع في كل ما نقدمه لعملائنا</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle>الابتكار والتطوير</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">نبتكر حلولاً جديدة ومتطورة تواكب أحدث التطورات التقنية</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <EnhancedFooter />
    </div>
  )
}
