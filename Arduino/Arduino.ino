// creates a "virtual" serial port/UART
// connect BT module TX to D10
// connect BT module RX to D11
// connect BT Vcc to 5V, GND to GND

#include <SoftwareSerial.h>
SoftwareSerial BT(10, 11); 
#include "MQ135.h"
const int mq135Pin = 0;    
MQ135 gasSensor = MQ135(mq135Pin);  // Initialise l'objet MQ135 sur le Pin spécifié
void setup()  
{
  // set the data rate for the SoftwareSerial port
  BT.begin(9600);
  // Send test message to other device
  BT.println("Hello from Arduino");
  float rzero = gasSensor.getRZero();
}
char a; // stores incoming character from other device
void loop() 
{
  float ppm = gasSensor.getPPM();
  if (BT.available())
  // if text arrived in from BT serial...
  {
    a=(BT.read());
    if (a=='p')
    {
      BT.println(analogRead(mq135Pin));
    }
    if (a=='c')
    {
      BT.println(ppm);
    }   
    // you can add more "if" statements with other characters to add more commands
  }
}

