<template>
    <tr>
        <th scope="row">{{ history.id }}</th>
        <td>{{ history.Product.name }}</td>
        <td>
            <img :src="history.Product.img_url" alt="produk" style="width: 100px">
        </td>
        <td>{{ history.Product.description }}</td>
        <td>USD {{ history.Product.price }}</td>
        <td>{{ history.updatedAt.split('T')[0] }}</td>
    </tr>
</template>

<script>
export default {
  name: 'HistoryRow',
  props: ['history']
}
</script>

<style>

</style>
