import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusFlowStore } from '@/store/useFocusFlowStore';

export default function FocusScreen() {
  const addFocusMinutes = useFocusFlowStore((state) => state.addFocusMinutes);
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  useEffect(() => { if (!running) return; const timer = setInterval(() => setSeconds((s) => s > 0 ? s - 1 : 0), 1000); return () => clearInterval(timer); }, [running]);
  useEffect(() => { if (seconds === 0 && running) { setRunning(false); addFocusMinutes(25); } }, [seconds, running, addFocusMinutes]);
  const mins = Math.floor(seconds / 60).toString().padStart(2,'0'); const secs = (seconds % 60).toString().padStart(2,'0');
  return <SafeAreaView style={styles.safe}><View style={styles.content}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable><Text style={styles.eyebrow}>FOCUS SESSION</Text><Text style={styles.title}>One thing at a time.</Text><Text style={styles.subtitle}>Put the noise aside and give one meaningful task your full attention.</Text><View style={styles.timer}><Text style={styles.time}>{mins}:{secs}</Text><Text style={styles.status}>{running ? 'FOCUSING' : seconds === 0 ? 'SESSION COMPLETE' : 'READY WHEN YOU ARE'}</Text></View><Pressable onPress={() => setRunning((v) => !v)} style={styles.button}><Text style={styles.buttonText}>{running ? 'Pause session' : seconds === 0 ? 'Start another' : 'Start focus'}</Text></Pressable></View></SafeAreaView>;
}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:'#0F172A'},content:{padding:24,flex:1},back:{color:'#93C5FD',fontWeight:'700',fontSize:16},eyebrow:{color:'#94A3B8',letterSpacing:2,fontWeight:'800',fontSize:12,marginTop:70},title:{color:'#FFF',fontSize:34,fontWeight:'800',marginTop:10},subtitle:{color:'#CBD5E1',fontSize:16,lineHeight:24,marginTop:10},timer:{flex:1,justifyContent:'center',alignItems:'center'},time:{fontSize:78,fontWeight:'200',color:'#FFF',fontVariant:['tabular-nums']},status:{color:'#94A3B8',fontSize:12,fontWeight:'800',letterSpacing:2,marginTop:12},button:{backgroundColor:'#FFF',padding:18,borderRadius:16,alignItems:'center',marginBottom:20},buttonText:{color:'#0F172A',fontSize:16,fontWeight:'800'}});
