'use client'
import { useState } from "react";
import { sub } from "date-fns"
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
const ContactForm = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
        subject: "",
        date: sub(new Date(), { days: 1 }),
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
      };
    
      // Form submission logic can be added here to send the data to whatsapp 
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // إرسال البيانات إلى واتساب مع تحسين الرسالة وإضافة رموز تعبيرية
        const whatsappUrl = `https://api.whatsapp.com/send?phone=966502959253&text=${encodeURIComponent(
          `👤 الاسم: ${data.name}\n📧 البريد الإلكتروني: ${data.email}\n📱 رقم الهاتف: ${data.phone}\n📝 الموضوع: ${data.subject}\n💬 الرسالة: ${data.message}\n\n🚀 يسعدنا تواصلك مع فريق AJ Marketing!`
        )}`;
        window.open(whatsappUrl, "_blank");
      };
    
    return(

         <Card className="bg-white/90 backdrop-blur-sm border-gray-200/60 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                    أرسل رسالة
                    <span className="block text-lg font-medium text-gray-600 mt-2">سنرد عليك في أقرب وقت</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-900 font-semibold">الاسم الكامل</Label>
                        <Input 
                          id="name" 
                          placeholder="اكتب اسمك الكامل" 
                          name="name"
                          value={data.name}
                          onChange={handleChange}
                          required
                          className="border-gray-200 focus:border-[#36a1d7] focus:ring-[#36a1d7]/20 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 font-semibold">البريد الإلكتروني</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          name="email"
                          value={data.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com" 
                          className="border-gray-200 focus:border-[#36a1d7] focus:ring-[#36a1d7]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-900 font-semibold">رقم الهاتف</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          name="phone"
                          value={data.phone}
                          onChange={handleChange}
                          required
                          placeholder="+966xxxxxxxxx" 
                          className="border-gray-200 focus:border-[#36a1d7] focus:ring-[#36a1d7]/20 transition-all duration-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-900 font-semibold">موضوع الرسالة</Label>
                        <Input 
                          id="subject" 
                          type="text"
                          name="subject"
                          value={data.subject}
                          onChange={handleChange}
                          required
                          placeholder="اختر موضوع الرسالة" 
                          className="border-gray-200 focus:border-[#36a1d7] focus:ring-[#36a1d7]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 font-semibold">نص الرسالة</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        required

                        placeholder="اكتب رسالتك هنا... أخبرنا عن مشروعك أو استفسارك" 
                        rows={6}
                        className="border-gray-200 focus:border-[#36a1d7] focus:ring-[#36a1d7]/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      إرسال الرسالة
                      <Mail className="w-4 h-4 mr-2" />
                     
                    </Button>
                    {/* <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#36a1d7] to-[#66b19e] hover:from-[#66b19e] hover:to-[#8bbb4c] text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      إرسال الرسالة
                    </Button> */}
                  </form>
                </CardContent>
              </Card>
    )
}

export default ContactForm;