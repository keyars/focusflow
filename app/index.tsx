import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useFocusFlowStore } from '@/store/useFocusFlowStore';
import { completionRate } from '@/domain/task/taskEngine';

export default function HomeScreen() {
  const { tasks, focusMinutesToday, toggleTask } = useFocusFlowStore();
  const completed = tasks.filter((task) => task.completed).length;
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        contentContainerStyle={styles.content}
        data={tasks}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<>
          <Text style={styles.eyebrow}>FOCUSFLOW</Text>
          <Text style={styles.title}>Make today count.</Text>
          <Text style={styles.subtitle}>A calm workspace for deciding what deserves your attention.</Text>
          <View style={styles.metrics}>
            <Metric label="Completed" value={`${completed}/${tasks.length}`} />
            <Metric label="Focus" value={`${focusMinutesToday}m`} />
            <Metric label="Progress" value={`${completionRate(tasks)}%`} />
          </View>
          <View style={styles.sectionHeader}><Text style={styles.sectionTitle}>Today</Text><Link href="/add-task" asChild><Pressable><Text style={styles.action}>+ Add task</Text></Pressable></Link></View>
        </>}
        renderItem={({ item }) => <Pressable onPress={() => toggleTask(item.id)} style={styles.task} accessibilityRole="checkbox" accessibilityState={{ checked: item.completed }}>
          <View style={[styles.checkbox, item.completed && styles.checked]}>{item.completed && <Text style={styles.check}>✓</Text>}</View>
          <View style={styles.taskBody}><Text style={[styles.taskTitle, item.completed && styles.done]}>{item.title}</Text><Text style={styles.meta}>{item.priority.toUpperCase()} · {item.estimatedMinutes} min</Text></View>
        </Pressable>}
        ListFooterComponent={<Link href="/focus" asChild><Pressable style={styles.focusButton}><Text style={styles.focusButtonText}>Start a focus session →</Text></Pressable></Link>}
      />
    </SafeAreaView>
  );
}

function Metric({ label, value }: { label: string; value: string }) { return <View style={styles.metric}><Text style={styles.metricValue}>{value}</Text><Text style={styles.metricLabel}>{label}</Text></View>; }

const styles = StyleSheet.create({ safe: { flex: 1, backgroundColor: '#F8FAFC' }, content: { padding: 24, paddingBottom: 40 }, eyebrow: { fontSize: 12, fontWeight: '800', letterSpacing: 2, color: '#64748B' }, title: { fontSize: 36, fontWeight: '800', color: '#0F172A', marginTop: 8 }, subtitle: { fontSize: 16, lineHeight: 24, color: '#64748B', marginTop: 10 }, metrics: { flexDirection: 'row', gap: 10, marginTop: 24 }, metric: { flex: 1, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 16, borderWidth: 1, borderColor: '#E2E8F0' }, metricValue: { fontSize: 22, fontWeight: '800', color: '#0F172A' }, metricLabel: { color: '#64748B', marginTop: 4 }, sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 32, marginBottom: 12 }, sectionTitle: { fontSize: 22, fontWeight: '800', color: '#0F172A' }, action: { fontWeight: '700', color: '#2563EB' }, task: { flexDirection: 'row', alignItems: 'center', gap: 14, padding: 16, backgroundColor: '#FFFFFF', borderRadius: 16, marginBottom: 10, borderWidth: 1, borderColor: '#E2E8F0' }, checkbox: { width: 24, height: 24, borderRadius: 8, borderWidth: 2, borderColor: '#CBD5E1', alignItems: 'center', justifyContent: 'center' }, checked: { backgroundColor: '#2563EB', borderColor: '#2563EB' }, check: { color: '#FFFFFF', fontWeight: '900' }, taskBody: { flex: 1 }, taskTitle: { fontSize: 16, fontWeight: '700', color: '#0F172A' }, done: { textDecorationLine: 'line-through', color: '#94A3B8' }, meta: { fontSize: 11, letterSpacing: .5, color: '#64748B', marginTop: 5 }, focusButton: { backgroundColor: '#0F172A', padding: 18, borderRadius: 16, alignItems: 'center', marginTop: 18 }, focusButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '800' } });
