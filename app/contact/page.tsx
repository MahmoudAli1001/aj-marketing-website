"use client"

import { Navbar } from "@/components/navbar"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">تواصل معنا</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                نحن هنا لمساعدتك في تحقيق أهدافك الرقمية وتحويل أفكارك إلى واقع
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">تواصل معنا</h2>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    سواء كان لديك مشروع جديد أو استفسار، نحن متحمسون للتحدث معك ومساعدتك في تحقيق أهدافك
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">Ajmarkting.s@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">رقم الهاتف</h3>
                      <p className="text-muted-foreground">+966502959253</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">العنوان</h3>
                      <p className="text-muted-foreground">تبوك، المملكة العربية السعودية</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">ساعات العمل</h3>
                      <p className="text-muted-foreground">الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle>أرسل رسالة</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">الاسم الكامل</Label>
                        <Input id="name" placeholder="اكتب اسمك الكامل" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input id="phone" placeholder="+966xxxxxxxxx" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">موضوع الرسالة</Label>
                        <Input id="subject" placeholder="اختر موضوع الرسالة" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">نص الرسالة</Label>
                      <Textarea id="message" placeholder="اكتب رسالتك هنا... أخبرنا عن مشروعك أو استفسارك" rows={6} />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      إرسال الرسالة
                    </Button>
                  </form>
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
