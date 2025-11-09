import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Step3Payment = () => {
  return (
    <div className="space-y-6">
        <div>
            <h2 className="text-2xl font-bold">Application Fee Payment</h2>
            <p className="text-gray-500 dark:text-gray-400">Complete the payment to proceed with your application.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between">
                            <span>H1-B Application Fee</span>
                            <span>$1,500.00</span>
                        </div>
                         <div className="flex justify-between">
                            <span>Processing Fee</span>
                            <span>$50.00</span>
                        </div>
                        <div className="border-t dark:border-gray-700 my-2"></div>
                         <div className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>$1,550.00</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>Enter your card information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="**** **** **** 1234" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                        </div>
                    </div>
                     <Button className="w-full">Pay Now</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default Step3Payment;
