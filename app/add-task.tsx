import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusFlowStore } from '@/store/useFocusFlowStore';
import { Priority } from '@/domain/task/types';

export default function AddTaskScreen() {
  const addTask = useFocusFlowStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [minutes, setMinutes] = useState('25');
  const save = () => { if (!title.trim()) return; addTask(title.trim(), priority, Math.max(5, Number(minutes) || 25)); router.back(); };
  return <SafeAreaView style={styles.safe}><View style={styles.content}><Pressable onPress={() => router.back()}><Text style={styles.back}>‹ Back</Text></Pressable><Text style={styles.title}>Add a task</Text><Text style={styles.label}>What needs your attention?</Text><TextInput value={title} onChangeText={setTitle} placeholder="e.g. Prepare project proposal" placeholderTextColor="#94A3B8" style={styles.input} autoFocus /><Text style={styles.label}>Priority</Text><View style={styles.row}>{(['low','medium','high'] as Priority[]).map((item) => <Pressable key={item} onPress={() => setPriority(item)} style={[styles.chip, priority === item && styles.chipActive]}><Text style={[styles.chipText, priority === item && styles.chipTextActive]}>{item}</Text></Pressable>)}</View><Text style={styles.label}>Estimated minutes</Text><TextInput value={minutes} onChangeText={setMinutes} keyboardType="number-pad" style={styles.input} /><Pressable onPress={save} style={styles.button}><Text style={styles.buttonText}>Create task</Text></Pressable></View></SafeAreaView>;
}
const styles = StyleSheet.create({ safe:{flex:1,backgroundColor:'#F8FAFC'},content:{padding:24},back:{color:'#2563EB',fontWeight:'700',fontSize:16},title:{fontSize:32,fontWeight:'800',color:'#0F172A',marginTop:28,marginBottom:28},label:{fontSize:13,fontWeight:'800',color:'#334155',marginBottom:9,marginTop:18},input:{backgroundColor:'#FFF',borderWidth:1,borderColor:'#CBD5E1',borderRadius:14,padding:15,fontSize:16,color:'#0F172A'},row:{flexDirection:'row',gap:10},chip:{paddingVertical:10,paddingHorizontal:18,borderRadius:20,borderWidth:1,borderColor:'#CBD5E1',backgroundColor:'#FFF'},chipActive:{backgroundColor:'#0F172A',borderColor:'#0F172A'},chipText:{color:'#475569',fontWeight:'700',textTransform:'capitalize'},chipTextActive:{color:'#FFF'},button:{marginTop:32,backgroundColor:'#2563EB',padding:17,borderRadius:15,alignItems:'center'},buttonText:{color:'#FFF',fontSize:16,fontWeight:'800'}});
